import http.client

conn = http.client.HTTPSConnection("graph.microsoft.com")

conn.request("GET", "/v1.0/me/drive/items/%7Bid%7D/workbook/names(%3Cname%3E)/range/format/fill")

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
