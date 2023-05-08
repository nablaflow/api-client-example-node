{ lib
, buildGoModule
, fetchFromGitHub
}:

buildGoModule rec {
  pname = "oauth2c";
  version = "1.5.2";

  src = fetchFromGitHub {
    owner = "cloudentity";
    repo = "oauth2c";
    rev = "v${version}";
    hash = "sha256-UZCZbTeVxO5atiMCXofQJdwP5XPMDFs0t9kywzlFjMw=";
  };

  vendorHash = "sha256-euEmslrSbXPVDNZkIguq+ukt74Um4H0+lIXEyCBorjE=";

  ldflags = [ "-s" "-w" ];

  doCheck = false;

  meta = with lib; {
    description = "User-friendly OAuth2 CLI";
    homepage = "https://github.com/cloudentity/oauth2c";
    license = licenses.asl20;
    maintainers = with maintainers; [ ];
  };
}
