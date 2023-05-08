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
        oauth2c = (pkgs.callPackage ./nix/oauth2c.nix { });
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
