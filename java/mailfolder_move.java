HttpResponse<String> response = Unirest.post("https://graph.microsoft.com/v1.0/me/mailFolders/%7Bid%7D/move")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();
