{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    (flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        nodejs = pkgs.nodejs-18_x;

        lib = pkgs.lib;
        oauth2c = pkgs.buildGoModule rec {
          pname = "oauth2c";
          version = "1.5.2";

          src = pkgs.fetchFromGitHub {
            owner = "cloudentity";
            repo = pname;
            rev = "v${version}";
            hash = "sha256-UZCZbTeVxO5atiMCXofQJdwP5XPMDFs0t9kywzlFjMw=";
          };

          vendorHash = "sha256-euEmslrSbXPVDNZkIguq+ukt74Um4H0+lIXEyCBorjE=";

          doCheck = false;
        };

      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            (yarn.override { nodejs = nodejs; })
            nodejs
            oauth2c
          ];
        };

        formatter = pkgs.nixpkgs-fmt;
      }));
}
