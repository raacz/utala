# frozen_string_literal: true

SONA__TOKI = "toki"
SONA__NIMI_PI_TOKI_ALA = "nimi_pi_toki_ala"
SONA__LIPU_PI_TOKI_ANTE = "toki_ante"
SONA__LIPU_LA_ONA_PI_TOKI_ANTE = "lipu_la_ona_pi_toki_ante"

# lipu ale la, o lukin sona e ni: ona li kepeken toki seme.
# sona li kama tan nimi lipu. pini nimi li sama "_toki" anu ".toki" la sona ni li kama: lipu li kepeken toki "toki".
# taso nimi toki ale ken o lon lipu config.yml. ni li tan ni: nimi lipu li jo e pini sama "_ijo" la ni li ken nimi toki ala.
# poki sona lipu li kama jo e sona ni:
# - "toki": lipu li kepeken toki seme.
# - "nimi_pi_toki_ala": nimi lipu pi nimi toki ala. nimi toki li kama weka tan nimi lipu la, ni.
Jekyll::Hooks.register [:pages, :documents], :post_init do |lipu|
  nimi = lipu.relative_path
  toki = nil
  nimi.match(/^(?<open_nimi>.*)[._](?<toki>\w+)(?<pini_nimi>[.]+\w+)$/) do |m|
    next unless (lipu.site.config["toki"] || []).include?(m[:toki])
    toki = m[:toki]
    nimi = m[:open_nimi] + m[:pini_nimi]
  end
  toki ||= lipu.site.config["sona_ala_la_toki"]
  lipu.data[SONA__TOKI] ||= toki
  lipu.data[SONA__NIMI_PI_TOKI_ALA] ||= nimi
end

# lipu ale la, o alasa e lipu ante ni: ona la sona "nimi_ilo" li sama. ni li lipu sama pi toki ante. o pana e ni lon poki sona lon nimi "toki_ante".
Jekyll::Hooks.register :site, :post_read do |ma_lipu|
  lipu_la_ona_pi_toki_ante = {}
  ma_lipu.pages.each do |lipu|
    nimi, toki = lipu.data.values_at(SONA__NIMI_PI_TOKI_ALA, SONA__TOKI)
    lipu_la_ona_pi_toki_ante[nimi] ||= []
    lipu_la_ona_pi_toki_ante[nimi] << lipu
  end
  ma_lipu.pages.each do |lipu|
    lipu.data[SONA__LIPU_PI_TOKI_ANTE] = lipu_la_ona_pi_toki_ante[lipu.data[SONA__NIMI_PI_TOKI_ALA]]
  end
  ma_lipu.data[SONA__LIPU_LA_ONA_PI_TOKI_ANTE] = lipu_la_ona_pi_toki_ante
end

module NimiWawa
  # nimi waw {% toki_sama lipu_ante.md %} li alasa e lipu ante 
  class TawaLipuPiTokiSama < Liquid::Tag
    include Jekyll::Filters::URLFilters
    def initialize(tag_name, nimi_lipu, tokens)
      super
      @nimi_lipu = nimi_lipu.strip
    end
    def render(poka)
      @context = poka
      nimi_lipu = Liquid::Template.parse(@nimi_lipu).render(poka)
      lipu = self.o_alasa_e_lipu(poka, nimi_lipu)
      return relative_url(lipu) if lipu
      Jekyll.logger.warn "ilo tawa_lipu_pi_toki_sama li alasa la lipu '#{nimi_lipu}' li lon ala"
    end
    def o_alasa_e_lipu(poka, nimi_lipu)
      ma_lipu = poka.registers[:site]
      lipu_lon = poka.registers[:page]
      toki_lon = lipu_lon[SONA__TOKI] || return
      lipu_la_ona_pi_toki_ante = ma_lipu.data[SONA__LIPU_LA_ONA_PI_TOKI_ANTE]
      ona_pi_toki_ante = lipu_la_ona_pi_toki_ante[nimi_lipu] || return
      ona_pi_toki_ante.detect { |ona| ona.data[SONA__TOKI] == toki_lon } || return
    end
  end
end
Liquid::Template.register_tag("tawa_lipu_pi_toki_sama", NimiWawa::TawaLipuPiTokiSama)
