require "pry"

class App
  def self.homepage
    "WELCOME HOME"
  end

  def self.call(environment_hash)
    # status_code = 200
    # header = {}
    # body = ['hello'] # or {}


    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    if req.path == "/"
      resp.write(homepage)
    elsif req.path == "/pizza"
      resp.write("YO PIZZA I LOVE U")
    else
      resp.write("404 YA DUN GOOFED TRY AGAIN")
      resp.status = 404
    end

    resp.finish

    # return [status_code, header, body]
  end
end
