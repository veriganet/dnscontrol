// Providers:
var REG_NONE = NewRegistrar("none", "NONE");
var CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

// Meta settings for individual records.
var CF_PROXY_OFF = {'cloudflare_proxy': 'off'};     // Proxy disabled.
var CF_PROXY_ON = {'cloudflare_proxy': 'on'};       // Proxy enabled.

// k8s clusters
var K8S0 = "97123e645323ef75300036546ecbafc0-408290970.eu-west-1.elb.amazonaws.com."
var K8S1 = "k8s1.veriga.net."
var K8S2 = "k8s2.veriga.net."

/**** veriga.net ****/
D("veriga.net",
    REG_NONE,
    DnsProvider(CLOUDFLARE),
    A("k8s1", "134.209.128.143", CF_PROXY_ON),
    A("k8s2", "137.184.242.241", CF_PROXY_ON),
    A("ex", "165.227.254.61", CF_PROXY_ON),
    A("ex-api", "165.227.254.61", CF_PROXY_ON),
    ALIAS("@", K8S1, CF_PROXY_ON),
    CNAME("charts", "charts-48z76.ondigitalocean.app.", CF_PROXY_ON),
    CNAME("k8s0", K8S0, CF_PROXY_ON),
    CNAME("api", K8S1, CF_PROXY_ON),
    CNAME("droneci", K8S1, CF_PROXY_ON),
    CNAME("droneci1", K8S1, CF_PROXY_ON),
    CNAME("notary", K8S0, CF_PROXY_ON),
    CNAME("tasks", K8S1, CF_PROXY_ON),
    CNAME("youtrack", "veriganet.myjetbrains.com.", CF_PROXY_ON),
    CNAME("registry", K8S0, CF_PROXY_ON),
    CNAME("registry-aws", K8S0, CF_PROXY_ON),
    CNAME("www", K8S1, CF_PROXY_ON),
    CNAME("stg", K8S1, CF_PROXY_ON),
    CNAME("stg2", K8S2, CF_PROXY_ON),
    CNAME("_79f74ed889024fce4615ae0db3ec6350", "_4cfaaa5018d5ce413be013df88775e01.xrchbtpdjs.acm-validations.aws.", CF_PROXY_OFF),
    CNAME("_98177084447eadfbb6e2e4b9e20fd710.charts.veriga.net.", "_3309afecd601d776b22211545814c238.hcxvpdkkrx.acm-validations.aws.", CF_PROXY_OFF),
    MX("@",10,"mx.zoho.com."),
    MX("@",20,"mx2.zoho.com."),
    MX("@",30,"mx3.zoho.com."),
    TXT("@", "zoho-verification=zb09169468.zmverify.zoho.com"),
    TXT("zmail._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXqDRJL8B6Df3pwGNSIvOeLcG8vcQ4Y9zOMTIbrtCIOw8m4C7L4Zt64fFleYFmOqRVoPeHPGLGLQlQtBq7ZLjerIoO3Y7kV4dGb8blUTAMCDEedRJlZ/uwn6Idr+nBx3z33az6G2RQzdjP4K46/v8qSbKLPzeTc1OdshMI8B3q/QIDAQAB"),
    // AWS Simple Mail Service
    TXT("_amazonses", "e+jUcAB5gu0vMfK6zkP41og6xh/Kj+wRRfDSxTHobh8="),
    CNAME("lm6kyszxwsadisi4djdcfopgaha4jcaa._domainkey", "lm6kyszxwsadisi4djdcfopgaha4jcaa.dkim.amazonses.com.", CF_PROXY_OFF),
    CNAME("grto6q7zwdkf2ugak4ervn7pysmixfyr._domainkey", "grto6q7zwdkf2ugak4ervn7pysmixfyr.dkim.amazonses.com.", CF_PROXY_OFF),
    CNAME("ljo6letvym2abbosrbuv5xv32wjspdu5._domainkey", "ljo6letvym2abbosrbuv5xv32wjspdu5.dkim.amazonses.com.", CF_PROXY_OFF),
    // Mailchimp / Mandrill
    TXT("@", "v=spf1 include:zoho.com include:spf.mandrillapp.com ~all"),
    TXT("mandrill._domainkey", "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrLHiExVd55zd/IQ/J/mRwSRMAocV/hMB3jXwaHH36d9NaVynQFYV8NaWi69c1veUtRzGt7yAioXqLj7Z4TeEUoOLgrKsn8YnckGs9i3B3tVFB+Ch/4mPhXWiNfNdynHWBcPcbJ8kjEQ2U8y78dHZj1YeRXXVvWob2OaKynO8/lQIDAQAB;"),
    // zoho verification
    CNAME("ZAC1454", "domain.zoho.com.", CF_PROXY_OFF)
)
