// Providers:
var REG_NONE = NewRegistrar("none", "NONE");
var CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

// Meta settings for individual records.
var CF_PROXY_OFF = {'cloudflare_proxy': 'off'};     // Proxy disabled.
var CF_PROXY_ON = {'cloudflare_proxy': 'on'};       // Proxy enabled.

// k8s clusters
var K8S0 = "k8s0.veriga.net."

/**** veriga.net ****/
D("veriga.net",
    REG_NONE,
    DnsProvider(CLOUDFLARE),
    A("@", "51.75.174.236", CF_PROXY_ON),
    A("k8s0", "51.75.174.236", CF_PROXY_ON),
    A("registry", "51.75.174.236", CF_PROXY_ON),
    CNAME("notary", K8S0, CF_PROXY_ON),
    CNAME("tasks", K8S0, CF_PROXY_ON),
    CNAME("www", K8S0, CF_PROXY_ON),
    MX("@",10,"mx.zoho.com."),
    MX("@",20,"mx2.zoho.com."),
    MX("@",30,"mx3.zoho.com."),
    TXT("@", "v=spf1 include:zoho.com include:spf.mandrillapp.com ~all"),
    TXT("@", "zoho-verification=zb09169468.zmverify.zoho.com")
)