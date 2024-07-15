using Microsoft.VisualBasic;
using Newtonsoft.Json;
using Rest;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Security;
using System.Text;
using System.Threading.Tasks;
using Transportation.Models;
using RestClient = RestSharp.RestClient;

namespace AutoEntry.lib
{

    public class apiDB
    {

        public class ResponseQuery
        {
            public string status { get; set; }
            public string message { get; set; }
            public DataTable Data { get; set; }
        }

        public class ResponseExe
        {
            public int row_effect { get; set; }
            public string error_msg { get; set; }
            public string Data { get; set; }
        }


        public class ResponseUpload
        {
            public bool status { get; set; }
            public string url { get; set; }
            public string msg { get; set; }
        }




        public DataTable Query(string sqlcmd , List<Param> list_param = null)
        {

            string param_name = "";
            string param_val = "";
            string param_type = "";

            if (list_param != null)
            {
                foreach (Param p in list_param)
                {
                    param_name += p.name + "|";
                    param_val += p.value + "|";
                    param_type += p.typ + "|";
                }
                param_name = param_name.TrimEnd('|');
                param_val = param_val.TrimEnd('|');
                param_type = param_type.Trim('|');
            }

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            string responsePayload = "";
            var requestData = new Dictionary<string, object>
            {
                { "cmd", "query"},
                { "statement", sqlcmd},
                { "param_name", param_name},
                { "param_val", param_val},
                { "param_type", param_type}
            };
            string requestString = JsonConvert.SerializeObject(requestData);
            var client = new RestClient(Setting.api.URL + "services/UtilityAPI_New");
            var request = new RestRequest();// Install NuGet => RestSharp.Newtonsoft.Json
            request.AddHeader("Content-Type", "application/json");
            request.AddHeader("x-api-key", Setting.xapikey.URL);
            request.AddHeader("x-req-sig", Setting.xreqsig.URL);
            request.AddHeader("x-frame-options", "sameorigin");
            request.AddHeader("X-XSS-Protection", "1; mode=block");
            request.AddHeader("X-Content-Type-Options", "nosniff");
            request.AddParameter("application/json", requestString, ParameterType.RequestBody);
            request.Method = Method.Post;
            // กัน error ssl
            ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(delegate { return true; });
            RestResponse response = client.Execute(request);
            responsePayload = response.Content;
            ResponseQuery dataModel = JsonConvert.DeserializeObject<ResponseQuery>(responsePayload);
            //UtilityCls.WriteLog("res GetTransactionIn : " + responsePayload);
            return dataModel.Data;
        }


        public int Execute(string sqlcmd, List<Param>  list_param)
        {
            string param_name = "";
            string param_val = "";
            string param_type = "";

            foreach (Param p in list_param)
            {
                param_name += p.name + "|";
                param_val += p.value + "|";
                param_type += p.typ + "|";
            }
            param_name = param_name.TrimEnd('|');
            param_val = param_val.TrimEnd('|');
            param_type = param_type.Trim('|');

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            string responsePayload = "";
            var requestData = new Dictionary<string, object>
            {
                { "cmd", "execute"},
                { "statement", sqlcmd},
                { "param_name", param_name},
                { "param_val", param_val},
                { "param_type", param_type}
            };

            string requestString = JsonConvert.SerializeObject(requestData);
            var client = new RestClient(Setting.api.URL + "services/UtilityAPI_New");
            var request = new RestRequest(); // Install NuGet => RestSharp.Newtonsoft.Json
                                             //request.AddHeader("Accept", "*/*");
            request.AddHeader("Content-Type", "application/json");
            request.AddHeader("x-api-key", Setting.xapikey.URL);
            request.AddHeader("x-req-sig", Setting.xreqsig.URL);
            request.AddHeader("x-frame-options", "sameorigin");
            request.AddHeader("X-XSS-Protection", "1; mode=block");
            request.AddHeader("X-Content-Type-Options", "nosniff");
            request.AddParameter("application/json", requestString, ParameterType.RequestBody);
            request.Method = Method.Post;
            // UtilityCls.WriteLog(requestString);  // เอาออกกก

            // กัน error ssl
            ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(delegate { return true; });
            RestResponse response = client.Execute(request);
            responsePayload = response.Content;
            ResponseExe dataModel = JsonConvert.DeserializeObject<ResponseExe>(responsePayload);
            //UtilityCls.WriteLog("res GetTransactionIn : " + responsePayload);
            return dataModel.row_effect;
        }



        public static string UploadPic(string imagename , string imgString)
        {
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            string ret = "";
            try
            {
                var requestData = new Dictionary<string, object>
            {
                { "imagename", imagename},
                { "imgString", imgString}           
            };
                string requestString = JsonConvert.SerializeObject(requestData);
                var client = new RestClient(Setting.api.URL + @"/services/AWSUpload");
                var request = new RestRequest(); // Install NuGet => RestSharp.Newtonsoft.Json
                                                 //request.AddHeader("Accept", "*/*");
                request.AddHeader("Content-Type", "application/json");
                request.AddHeader("x-api-key", Setting.xapikey.URL);
                request.AddHeader("x-req-sig", Setting.xreqsig.URL);
                request.AddParameter("application/json", requestString, ParameterType.RequestBody);
                request.Method = Method.Post;
                // กัน error ssl
                ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(delegate { return true; });
                RestResponse response = client.Execute(request);
                string responsePayload = response.Content;
                //ClsUtility.WriteLog("res APSOpenShift : " + responsePayload);
                ResponseUpload dataModel = JsonConvert.DeserializeObject<ResponseUpload>(responsePayload);  
                if(dataModel.url != "" && dataModel.url != null)
                {
                    ret = dataModel.url;
                }
            }
            catch (Exception e)
            {
                //ClsUtility.WriteLog("err APSOpenShift : " + e.ToString());
            }
            return ret;
        }





        public class Information
        {
            public bool Status { get; set; }
            public string Msg { get; set; }
            public DateTime stamp_time { get; set; }
            public int total_parking_time_mins { get; set; }
            public string total_parking_time { get; set; }
            public List<transaction_information> trans_information { get; set; }

            public transaction_information transIn;



            public double total = 0;
            public double all_paid = 0;
            public double all_fee = 0;
            public DateTime paid_date;

            public double aa_fee_paid = 0;
            public double aa_penalty_paid = 0;
            public double bb_fee_paid = 0;
            public double bb_penalty_paid = 0;

            public double aa_parkingFee = 0;
            public double aa_penaltyFee = 0;

            public double bb_parkingFee = 0;
            public double bb_penaltyFee = 0;


            public void validate_Data()
            {
                total = 0;
                all_paid = 0;
                all_fee = 0;

                aa_fee_paid = 0;
                aa_penalty_paid = 0;
                bb_fee_paid = 0;
                bb_penalty_paid = 0;

                aa_parkingFee = 0;
                aa_penaltyFee = 0;

                bb_parkingFee = 0;
                bb_penaltyFee = 0;

                DateTime max_paiddate = new DateTime();
                foreach (transaction_information d in trans_information)
                {
                    if (d.gatetypeid != 8)
                    {
                        aa_fee_paid += d.paid;
                        aa_penalty_paid += d.paid_penalty;
                        aa_parkingFee += d.ParkingFee;
                        aa_penaltyFee += d.PenaltyFee;

                    }
                    else
                    {
                        bb_fee_paid += d.paid;
                        bb_penalty_paid += d.paid_penalty;
                        bb_parkingFee += d.ParkingFee;
                        bb_penaltyFee += d.PenaltyFee;
                    }
                    if (d.paid_date > max_paiddate) max_paiddate = d.paid_date;
                }
                paid_date = max_paiddate;
                all_paid = aa_fee_paid + aa_penalty_paid + bb_fee_paid + bb_penalty_paid;
                all_fee = aa_parkingFee + aa_penaltyFee + bb_parkingFee + bb_penaltyFee;
                double buff = all_fee - all_paid;
                total = buff > 0 ? buff : 0;
            }
            public void Select_transactionIn(string type)
            {
                if (trans_information.Count > 1 && type == "SUB")
                {
                    transIn = trans_information[trans_information.Count - 2];
                }
                else
                {
                    transIn = trans_information[trans_information.Count - 1];
                }
            }
        }
        public class transaction_information
        {
            public string Seq { get; set; }
            public string License { get; set; }
            public DateTime EntryDate { get; set; }
            public DateTime ExitDate { get; set; }
            public DateTime PaidDate { get; set; }
            public int ParkingTime_min { get; set; }
            public string ParkingTime { get; set; }
            public double ParkingFee { get; set; }
            public double Discount { get; set; }
            public double PenaltyFee { get; set; }
            public string stamp_id { get; set; }
            public string stamp_name { get; set; }
            public double paid { get; set; }
            public double paid_penalty { get; set; }
            public int vehicletype { get; set; }
            public string cardname { get; set; }
            public int entrygate_id { get; set; }
            public string entrygate_name { get; set; }
            public int gatetypeid { get; set; }
            public int client_ID { get; set; }
            public int site_id { get; set; }
            public int company_id { get; set; }
            public string entry_path1 { get; set; }
            public string entry_path2 { get; set; }
            public bool exit_car { get; set; }
            public DateTime paid_date = new DateTime();
            public string cardcode { get; set; }
            public string free_hours { get; set; }
            public string free_overnight { get; set; }
        }


        public class order_detail
        {
            public string seq { get; set; }
            public double amount { get; set; }
            public string merchant_order_id { get; set; }
            public double parkingfee { get; set; }
            public double overnight { get; set; }
            public double lostcard { get; set; }
            public string fee_type { get; set; }
            public string remark { get; set; }
            public string terminal_id { get; set; }
            public string station_id { get; set; }
        }

        public class req_creatOder
        {
            public List<order_detail> order_detail { get; set; }
        }

        public class req_gettrans
        {
            public int stationID { get; set; }
            public string ticketNo { get; set; }
        }

        public static Information GetTransactionInfo(string ticketID, int gate_id)
        {
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            //string ret = "";
            Information dataModel = new Information();

            try
            {
                req_gettrans t = new req_gettrans
                {
                    ticketNo = ticketID,
                    stationID = gate_id
                };
                string requestString = JsonConvert.SerializeObject(t);

                var client = new RestClient(Setting.api.URL + "services/GetTransactionInfo");
                var request = new RestRequest();// Install NuGet => RestSharp.Newtonsoft.Json
                request.AddHeader("Accept", "*/*");
                request.AddHeader("Content-Type", "application/json");
                request.AddHeader("x-api-key", Setting.xapikey.URL);
                request.AddHeader("x-req-sig", Setting.xreqsig.URL);
                request.AddParameter("application/json", requestString, ParameterType.RequestBody);
                request.Method = Method.Post;

                //กัน error ssl
                ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(delegate { return true; });
                RestResponse response = client.Execute(request);
                string responsePayload = response.Content;
                //ClsUtility.WriteLog("res APSOpenShift : " + responsePayload);

                dataModel = JsonConvert.DeserializeObject<Information>(responsePayload);
            }
            catch (Exception)
            {
                //ClsUtility.WriteLog("err APSOpenShift : " + e.ToString());
            }
            return dataModel;
        }














    }

   
    public class Param
    {
        public enum type
        {
            Integer,
            Boolean,
            Varchar,
            Timestamp,
            Float
        };
        public string name = "";
        public string value = "";
        public string typ = "";

        public Param(string name, string val, type t)
        {
            this.name = name;
            this.value = val;
            this.typ = t.ToString();
        }
    }
}
