var data = "{ }";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://graph.microsoft.com/v1.0/groups/%7Bid%7D/threads/%7Bid%7D/posts/%7Bid%7D/forward");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);
