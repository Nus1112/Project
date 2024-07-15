
using System.Net;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Transportation.Models;

class APIConnect
{
    //string url = "https://devbbl.cityparking.site/API_BBL/";
    //string xapikey = "k0i3nf03-1jvopsdq12-0o43gn230rt203";
    //string xreqsig = "pssI~fvn162";
    string url = Setting.api.URL;
    string xapikey = Setting.xapikey.URL;
    string xreqsig = Setting.xreqsig.URL;
    public string PostApi(string url, string data)
    {
        string result = null;
        try
        {
            //ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            var httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
            httpWebRequest.Headers["x-api-key"] = xapikey;
            httpWebRequest.Headers["x-req-sig"] = xreqsig;
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.Method = "POST";
            httpWebRequest.Timeout = 15000;
            using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
            {
                streamWriter.Write(data);// POST DATA
            }
            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();

            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                result = streamReader.ReadToEnd();// Get data form server             
            }
        }
        catch (WebException ex)
        {
            if (ex.Response != null)
            {
                result = new StreamReader(ex.Response.GetResponseStream()).ReadToEnd();
            }
        }
        return result;
    }

    public string GetApi(string url, string stringpayload)
    {
        string result = null;
        try
        {
            //ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            var httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
            httpWebRequest.Headers["x-api-key"] = xapikey;
            httpWebRequest.Headers["x-req-sig"] = xreqsig;
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.Method = "GET";
            httpWebRequest.Timeout = 15000;
            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();

            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                result = streamReader.ReadToEnd();// Get data form server             
            }
        }
        catch (WebException ex)
        {
            if (ex.Response != null)
            {
                result = new StreamReader(ex.Response.GetResponseStream()).ReadToEnd();
            }
        }
        return result;
    }


   
    public string login(string User, string Password)
    {

        var data = new
        {
            username = User,
            password = Password

        };
        string stringpayload = JsonConvert.SerializeObject(data);
        string uri = url + "services/LoginUser";
        string result = PostApi(uri, stringpayload);
        return result;
    }
   
    public string Search(string License, string Card)
    {

        var data = new
        {
            License = License,
            Card = Card
        };
        string stringpayload = JsonConvert.SerializeObject(data);
        string uri = url + "services/";
        string result = GetApi(uri, stringpayload);
        return result;
    }
    public string Addreceipt(string Money, string Receip, string Company, string Shop)
    {

        var data = new
        {
            Money = Money,
            Receip = Receip,
            Company = Company,
            Shop = Shop
        };
        string stringpayload = JsonConvert.SerializeObject(data);
        string uri = url + "services/";
        string result = GetApi(uri, stringpayload);
        return result;
    }
    public string discountshop(string List)
    {

        var data = new
        {
            List = List,
        };
        string stringpayload = JsonConvert.SerializeObject(data);
        string uri = url + "services/";
        string result = GetApi(uri, stringpayload);
        return result;
    }
    public string discountmbk(string QRcode)
    {

        var data = new
        {
            QRcode = QRcode,
        };
        string stringpayload = JsonConvert.SerializeObject(data);
        string uri = url + "services/";
        string result = GetApi(uri, stringpayload);
        return result;
    }
    public string cancle(string License, string Card)
    {

        var data = new
        {
            License = License,
            Card = Card
        };
        string stringpayload = JsonConvert.SerializeObject(data);
        string uri = url + "services/";
        string result = GetApi(uri, stringpayload);
        return result;
    }





}
