require 'uri'
require 'net/http'

url = URI("https://graph.microsoft.com/v1.0/me/calendar")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Delete.new(url)
request["content-type"] = 'application/json'
request.body = "{ }"

response = http.request(request)
puts response.read_body
