var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://graph.microsoft.com/v1.0/me/messages?%24expand=Extensions(%24filter%3Did%20eq%20'Com.Contoso.Referral')&%24filter=Extensions%2Fany(f%3Af%2Fid%20eq%20'Com.Contoso.Referral')");

xhr.send(data);
