// Providers:
var REG_NONE = NewRegistrar("none", "NONE");
var CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

// Meta settings for individual records.
var CF_PROXY_OFF = {'cloudflare_proxy': 'off'};     // Proxy disabled.
var CF_PROXY_ON = {'cloudflare_proxy': 'on'};       // Proxy enabled.

// k8s clusters
var K8S0 = "97123e645323ef75300036546ecbafc0-408290970.eu-west-1.elb.amazonaws.com."

/**** veriga.net ****/
D("veriga.net",
    REG_NONE,
    DnsProvider(CLOUDFLARE),
    A("@", "52.50.29.1", CF_PROXY_ON),
    CNAME("notary", K8S0, CF_PROXY_ON),
    CNAME("tasks", K8S0, CF_PROXY_ON),
    CNAME("registry", K8S0, CF_PROXY_ON),
    CNAME("www", K8S0, CF_PROXY_ON),
    CNAME("_79f74ed889024fce4615ae0db3ec6350", "_4cfaaa5018d5ce413be013df88775e01.xrchbtpdjs.acm-validations.aws.", CF_PROXY_ON),
    CNAME("_134ed75b874338c542ddd97f370f2f5b.k8s0", "_98517859d8189057fd26060d16c904e5.xrchbtpdjs.acm-validations.aws.", CF_PROXY_ON),
    CNAME("_42d75e4bcd698f5a5b4dc01ad5e19f7f.www", "_532d6f472c2e38c53aedd9ddd115e7e7.xrchbtpdjs.acm-validations.aws.", CF_PROXY_ON),
    MX("@",10,"mx.zoho.com."),
    MX("@",20,"mx2.zoho.com."),
    MX("@",30,"mx3.zoho.com."),
    TXT("@", "v=spf1 include:zoho.com include:spf.mandrillapp.com ~all"),
    TXT("@", "zoho-verification=zb09169468.zmverify.zoho.com"),
    TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXqDRJL8B6Df3pwGNSIvOeLcG8vcQ4Y9zOMTIbrtCIOw8m4C7L4Zt64fFleYFmOqRVoPeHPGLGLQlQtBq7ZLjerIoO3Y7kV4dGb8blUTAMCDEedRJlZ/uwn6Idr+nBx3z33az6G2RQzdjP4K46/v8qSbKLPzeTc1OdshMI8B3q/QIDAQAB")
)