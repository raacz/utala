{ pkgs, legacyPolygott }: {
	deps = [
		pkgs.ruby
		pkgs.solargraph
		pkgs.rufo
    pkgs.html-proofer
	] ++ legacyPolygott;
}