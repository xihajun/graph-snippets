HttpResponse<String> response = Unirest.delete("https://graph.microsoft.com/v1.0/groups/%7Bid%7D/conversations/%7Bid%7D")
  .header("content-type", "application/json")
  .body("{ }")
  .asString();