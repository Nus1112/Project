using AutoEntry.lib;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Data;
using System.Diagnostics;
using Transportation.Models;
using static Transportation.Models.Setting;

namespace Transportation.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            Setting.DB.connectionstring = _configuration.GetValue<string>("ConnectionStrings:DB");
            Setting.URLConfirm.URL = _configuration.GetValue<string>("ConnectionStrings:URLConfirm");
            Setting.URLPayment.URL = _configuration.GetValue<string>("ConnectionStrings:URLPayment");
            Setting.api.URL = _configuration.GetValue<string>("ConnectionStrings:api");
            Setting.xapikey.URL = _configuration.GetValue<string>("ConnectionStrings:x-api-key");
            Setting.xreqsig.URL = _configuration.GetValue<string>("ConnectionStrings:x-req-sig");
            Setting.host.URL = _configuration.GetValue<string>("ConnectionStrings:host");
            Setting.port.URL = _configuration.GetValue<string>("ConnectionStrings:port");
            Setting.Errorlog.URL = _configuration.GetValue<string>("ConnectionStrings:Errorlog");
            Setting.maillog.URL = _configuration.GetValue<string>("ConnectionStrings:maillog");
            Setting.password.URL = _configuration.GetValue<string>("ConnectionStrings:password");
            _configuration = configuration;
        }

        public IActionResult Vertical()
        {
            return View();
        }
        
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }



        [HttpPost]
        public ActionResult Login([FromBody] Login body)
        {
            try
            {
                string User = body.User;
                string Password = body.Password;

                APIConnect con = new APIConnect();
                string data = "";
                data = con.login(User, Password);

                return Ok(data);


            }
            catch
            { return null; }
        }

        [HttpPost]
        public ActionResult search([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license = @entry_license  ";
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license LIKE '%' || @entry_license || '%'  AND CAST(entry_date + interval '7 hour' AS DATE) = CAST(NOW() AS DATE) -3  AND exit_date IS NULL ORDER BY id DESC ";
            string cmd = "SELECT * FROM pss_taxi_queue_master order by id desc limit 1";
            apiDB db = new apiDB();


            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        [HttpPost]
        public ActionResult Taxi([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license = @entry_license  ";
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license LIKE '%' || @entry_license || '%'  AND CAST(entry_date + interval '7 hour' AS DATE) = CAST(NOW() AS DATE) -3  AND exit_date IS NULL ORDER BY id DESC ";
            string cmd = "SELECT * FROM pss_taxi_queue_itd order by id desc limit 1";
            apiDB db = new apiDB();


            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        [HttpPost]
        public ActionResult ActiveAll([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license = @entry_license  ";
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license LIKE '%' || @entry_license || '%'  AND CAST(entry_date + interval '7 hour' AS DATE) = CAST(NOW() AS DATE) -3  AND exit_date IS NULL ORDER BY id DESC ";
            string cmd = "SELECT * FROM pss_vehicle_public order by id ASC ";
            apiDB db = new apiDB();


            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        [HttpPost]
        public ActionResult Parking([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license = @entry_license  ";
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license LIKE '%' || @entry_license || '%'  AND CAST(entry_date + interval '7 hour' AS DATE) = CAST(NOW() AS DATE) -3  AND exit_date IS NULL ORDER BY id DESC ";
            string cmd = "SELECT * FROM pss_parking_space_master WHERE parking_space_id = '2' order by id desc limit 1";
            apiDB db = new apiDB();


            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }

        [HttpPost]
        public ActionResult Parkingicon([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license = @entry_license  ";
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license LIKE '%' || @entry_license || '%'  AND CAST(entry_date + interval '7 hour' AS DATE) = CAST(NOW() AS DATE) -3  AND exit_date IS NULL ORDER BY id DESC ";
            string cmd = "SELECT * FROM pss_parking_space_master WHERE parking_space_id = '1' order by id desc limit 1";
            apiDB db = new apiDB();


            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        [HttpPost]
        public ActionResult Parkingics([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license = @entry_license  ";
            //string cmd = "SELECT * FROM parking_transaction WHERE entry_license LIKE '%' || @entry_license || '%'  AND CAST(entry_date + interval '7 hour' AS DATE) = CAST(NOW() AS DATE) -3  AND exit_date IS NULL ORDER BY id DESC ";
            string cmd = "SELECT * FROM pss_parking_space_master WHERE parking_space_id = '3' order by id desc limit 1";
            apiDB db = new apiDB();


            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        [HttpPost]
        public ActionResult language([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            string cmd = "SELECT * FROM pss_setting_language order by id asc ";
            apiDB db = new apiDB();

            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);

            HttpContext.Session.SetString("data", jsonString);
            return Ok(jsonString);

        }
        [HttpPost]
        public ActionResult languageth([FromBody] search body)
        {

            string data = HttpContext.Session.GetString("data");

            // แปลง DataTable เป็น JSON string
            //var jsonString = JsonConvert.SerializeObject(data);
            return Ok(data);

        }
        [HttpPost]
        public ActionResult startdate([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            string cmd = @"SELECT pss_general_setting.id, pss_general_setting.time_language,pss_general_setting.start_date_moved0,pss_general_setting.end_date_moved0,pss_general_setting.overtime_message
                        ,pss_general_setting.start_date,pss_general_setting.end_date,psl1.name,psl1.thai_language,psl1.eng_language,psl1.chinese_language
                        FROM pss_general_setting 
                        INNER JOIN pss_setting_language AS psl1 ON psl1.id = pss_general_setting.overtime_message
                        ORDER BY pss_general_setting.id DESC LIMIT 1;";
            apiDB db = new apiDB();

            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        [HttpPost]
        public ActionResult bus([FromBody] search body)
        { 
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            string cmd = @"SELECT * FROM (SELECT pss_vehicle_public_master.id,pss_vehicle_public_master.source,pss_vehicle_public_master.destination,pss_vehicle_public_master.destination_time,pss_vehicle_public_master.receive_information,
                        pss_vehicle_public_master.round_trip,pss_public_route.name,pss_public_route.source,pss_public_route.destination,pss_public_route.language_name,psl1.thai_language,psl2.thai_language,psl3.thai_language,
                        psl3.eng_language,psl3.chinese_language,psl1.eng_language,psl2.eng_language,psl1.chinese_language,psl2.chinese_language
                        FROM pss_vehicle_public_master 
                        INNER JOIN pss_public_route ON pss_public_route.id = pss_vehicle_public_master.public_route_id AND pss_vehicle_public_master.public_route_id BETWEEN 1 AND 5
                        INNER JOIN pss_setting_language AS psl1 ON psl1.id = pss_public_route.source
                        INNER JOIN pss_setting_language AS psl2 ON psl2.id = pss_public_route.destination
                        INNER JOIN pss_setting_language AS psl3 ON psl3.id = pss_public_route.language_name
                        WHERE receive_information IS NOT NULL 
                        ORDER BY pss_vehicle_public_master.id desc 
                        LIMIT 12 ) AS data order by data.destination_time asc
                        ";
            apiDB db = new apiDB();

            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        public ActionResult qrparking([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            string cmd = "SELECT * FROM pss_parking_space_setting";
            apiDB db = new apiDB();

            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        public ActionResult BTS([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            //string cmd = @"SELECT psl3.name,pss_bts_master.time_list,
            //            pss_public_route.source,pss_public_route.destination,psl1.name,psl1.thai_language,psl1.eng_language,
            //            psl1.chinese_language,psl2.name,psl2.thai_language,psl2.eng_language,
            //            psl2.chinese_language
            //            FROM public.pss_bts_master
            //            INNER JOIN pss_public_route ON pss_public_route.id = pss_bts_master.public_route_id 
            //            INNER JOIN pss_setting_language AS psl1 ON psl1.id = pss_public_route.source
            //            INNER JOIN pss_setting_language AS psl2 ON psl2.id = pss_public_route.destination
            //            INNER JOIN pss_date_type AS psl3 ON psl3.id = pss_bts_master.date_type_id
            //            WHERE  CAST(TO_TIMESTAMP(time_list, 'HH12:MI AM') AS TIME) > CAST(Now() AS TIME)
            //            ORDER BY pss_bts_master.id DESC limit 2";
            //string cmd = @"SELECT public.fnc_get_bts_master(date_in = @date_in)";
            string cmd = @"SELECT * FROM ( SELECT psl3.name,pss_bts_master.time_list,pss_bts_master.initials_source, pss_bts_master.initials_destination,
                        pss_public_route.source,pss_public_route.destination,psl1.name,psl1.thai_language,psl1.eng_language,
                        psl1.chinese_language,psl2.name,psl2.thai_language, psl2.eng_language,psl2.chinese_language
                    FROM public.pss_bts_master
                        INNER JOIN pss_public_route ON pss_public_route.id = pss_bts_master.public_route_id 
                        INNER JOIN pss_setting_language AS psl1 ON psl1.id = pss_public_route.source
                        INNER JOIN pss_setting_language AS psl2 ON psl2.id = pss_public_route.destination
                        INNER JOIN pss_date_type AS psl3 ON psl3.id = pss_bts_master.date_type_id
                    WHERE 
                        CAST(TO_TIMESTAMP(time_list, 'HH24:MI') AS TIME) > CAST(NOW() AS TIME)
                        AND pss_bts_master.initials_destination = 'G1'
                    ORDER BY pss_bts_master.id ASC LIMIT 2) AS data1
                UNION ALL(SELECT psl3.name,pss_bts_master.time_list,pss_bts_master.initials_source,pss_bts_master.initials_destination,
                    pss_public_route.source,pss_public_route.destination,psl1.name,psl1.thai_language,
                    psl1.eng_language,psl1.chinese_language,psl2.name,psl2.thai_language,psl2.eng_language,psl2.chinese_language
                FROM public.pss_bts_master
                    INNER JOIN pss_public_route ON pss_public_route.id = pss_bts_master.public_route_id 
                    INNER JOIN pss_setting_language AS psl1 ON psl1.id = pss_public_route.source
                    INNER JOIN pss_setting_language AS psl2 ON psl2.id = pss_public_route.destination
                    INNER JOIN pss_date_type AS psl3 ON psl3.id = pss_bts_master.date_type_id
                WHERE 
                    CAST(TO_TIMESTAMP(time_list, 'HH24:MI') AS TIME) > CAST(NOW() AS TIME)
                    AND pss_bts_master.initials_destination = 'G3'
                ORDER BY pss_bts_master.id ASC LIMIT 2)
                ORDER BY destination ASC
                ";
            apiDB db = new apiDB();
            List<Param> p = new List<Param>();
            //p.Add(new Param("date_in", DateTime.Now.ToString(), Param.type.Varchar));
            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }


        public ActionResult Template([FromBody] search body)
        {
            bool _return = false;
            string template = "Template 4";
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            string cmd = "SELECT * FROM pss_template_setting WHERE template_id = @template_id";
            apiDB db = new apiDB();
            List<Param> p = new List<Param>();
            p.Add(new Param("template_id", template, Param.type.Varchar));
            try
            {
                dt2 = sql.Query(cmd,p);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        public ActionResult Template1([FromBody] search body)
        {
            bool _return = false;
            string template = "Template 4";
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            string cmd = "SELECT * FROM pss_template_setting WHERE template_id = @template_id";
            apiDB db = new apiDB();
            List<Param> p = new List<Param>();
            p.Add(new Param("template_id", template, Param.type.Varchar));
            try
            {
                dt2 = sql.Query(cmd, p);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }


        public ActionResult Boat([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();
            
            string cmd = @"(SELECT pss_vehicle_public_master.id,
                        pss_vehicle_public_master.source,
                        pss_vehicle_public_master.destination,
                        pss_public_route.name_moved0,
                        pss_public_route.source_moved0,
                        pss_public_route.destination_moved0,
                        pss_vehicle_public_master.destination_time,
                        pss_vehicle_public_master.receive_information,
                        pss_vehicle_public_master.round_trip,
                        pss_public_route.name,
                        pss_public_route.source,
                        pss_public_route.destination,
                        pss_public_route.language_name,
                        psl1.thai_language,
                        psl2.thai_language,
                        psl1.eng_language,
                        psl2.eng_language,
                        psl1.chinese_language,
                        psl2.chinese_language,
 						psl3.thai_language,
                        psl3.eng_language,
 						psl3.chinese_language
                 FROM pss_vehicle_public_master
                 INNER JOIN pss_public_route ON pss_public_route.id =  pss_vehicle_public_master.public_route_id
                 LEFT JOIN pss_setting_language AS psl1 ON psl1.id = pss_public_route.source
                 LEFT JOIN pss_setting_language AS psl2 ON psl2.id = pss_public_route.destination
 				 LEFT JOIN pss_setting_language AS psl3 ON psl3.id = pss_public_route.language_name
                 WHERE pss_vehicle_public_master.vehicle_public_id = 2 AND pss_vehicle_public_master.public_route_id = 10
                 ORDER BY pss_vehicle_public_master.id DESC
                 LIMIT 2)
                 UNION ALL
                (SELECT pss_vehicle_public_master.id,
                        pss_vehicle_public_master.source,
                        pss_vehicle_public_master.destination,
                        pss_public_route.name_moved0,
                        pss_public_route.source_moved0,
                        pss_public_route.destination_moved0,
                        pss_vehicle_public_master.destination_time,
                        pss_vehicle_public_master.receive_information,
                        pss_vehicle_public_master.round_trip,
                        pss_public_route.name,
                        pss_public_route.source,
                        pss_public_route.destination,
                        pss_public_route.language_name,
                        psl1.thai_language,
                        psl2.thai_language,
                        psl1.eng_language,
                        psl2.eng_language,
                        psl1.chinese_language,
                        psl2.chinese_language,
				 		psl3.thai_language,
                        psl3.eng_language,
 						psl3.chinese_language
                 FROM pss_vehicle_public_master
                 INNER JOIN pss_public_route ON pss_public_route.id =  pss_vehicle_public_master.public_route_id
                 LEFT JOIN pss_setting_language AS psl1 ON psl1.id = pss_public_route.source
                 LEFT JOIN pss_setting_language AS psl2 ON psl2.id = pss_public_route.destination
				 LEFT JOIN pss_setting_language AS psl3 ON psl3.id = pss_public_route.language_name
                 WHERE pss_vehicle_public_master.vehicle_public_id = 2 AND pss_vehicle_public_master.public_route_id = 11
                 ORDER BY pss_vehicle_public_master.id DESC
                 LIMIT 1)order by destination_time ASC";
            apiDB db = new apiDB();
            List<Param> p = new List<Param>();
            //p.Add(new Param("date_in", DateTime.Now.ToString(), Param.type.Varchar));
            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }

        public ActionResult Boatex([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();

            string cmd = @" (SELECT public_route_id, pss_vehicle_public_master.source,pss_vehicle_public_master.destination,pss_vehicle_public_master.destination_period,pss_vehicle_public_master.destination_time,
pss_vehicle_public_master.round_trip,pss_public_route.name,pss_public_route.source,pss_public_route.destination,pss_public_route.language_name,psl1.thai_language,psl2.thai_language,psl3.thai_language,
psl3.eng_language,psl3.chinese_language,psl1.eng_language,psl2.eng_language,psl1.chinese_language,psl2.chinese_language
FROM  pss_vehicle_public_master 
INNER JOIN pss_public_route ON pss_public_route.id = pss_vehicle_public_master.public_route_id 
INNER JOIN pss_setting_language AS psl1 ON psl1.name = pss_vehicle_public_master.source
INNER JOIN pss_setting_language AS psl2 ON psl2.name = pss_vehicle_public_master.destination
             INNER JOIN pss_setting_language AS psl3 ON psl3.id = pss_public_route.language_name
            WHERE pss_vehicle_public_master.vehicle_public_id = 3 AND retrieval_time >= CURRENT_DATE 
          order by pss_vehicle_public_master.id desc limit 3)
UNION ALL
(SELECT public_route_id, pss_vehicle_public_master.source,pss_vehicle_public_master.destination,pss_vehicle_public_master.destination_period,pss_vehicle_public_master.destination_time,
                        pss_vehicle_public_master.round_trip,pss_public_route.name,pss_public_route.source,pss_public_route.destination,pss_public_route.language_name,psl1.thai_language,psl2.thai_language,psl3.thai_language,
                        psl3.eng_language,psl3.chinese_language,psl1.eng_language,psl2.eng_language,psl1.chinese_language,psl2.chinese_language
 FROM pss_vehicle_public_master
 INNER JOIN pss_public_route ON pss_public_route.id =  pss_vehicle_public_master.public_route_id
 LEFT JOIN pss_setting_language AS psl1 ON psl1.id = pss_public_route.source
 LEFT JOIN pss_setting_language AS psl2 ON psl2.id = pss_public_route.destination
 LEFT JOIN pss_setting_language AS psl3 ON psl3.id = pss_public_route.language_name
 WHERE pss_vehicle_public_master.vehicle_public_id = 2 AND pss_vehicle_public_master.public_route_id = 14
 ORDER BY pss_vehicle_public_master.id DESC
 LIMIT 1)order by destination_time ASC
                ";
            apiDB db = new apiDB();
            List<Param> p = new List<Param>();
            //p.Add(new Param("date_in", DateTime.Now.ToString(), Param.type.Varchar));
            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }

        public ActionResult reva([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();

            string cmd = @" SELECT * FROM (SELECT pss_vehicle_public_master.id,pss_vehicle_public_master.source,pss_vehicle_public_master.destination,pss_vehicle_public_master.destination_time,pss_vehicle_public_master.destination_period,pss_vehicle_public_master.receive_information,pss_vehicle_public_master.route_id,
                        pss_vehicle_public_master.round_trip,pss_public_route.name,pss_public_route.source,pss_public_route.destination,pss_public_route.language_name,psl1.thai_language,psl2.thai_language,psl3.thai_language,
                        psl3.eng_language,psl3.chinese_language,psl1.eng_language,psl2.eng_language,psl1.chinese_language,psl2.chinese_language
                        FROM pss_vehicle_public_master 
                        INNER JOIN pss_public_route ON pss_public_route.id = pss_vehicle_public_master.public_route_id AND pss_vehicle_public_master.public_route_id = 14
                        INNER JOIN pss_setting_language AS psl1 ON psl1.id = pss_public_route.source
                        INNER JOIN pss_setting_language AS psl2 ON psl2.id = pss_public_route.destination
                        INNER JOIN pss_setting_language AS psl3 ON psl3.id = pss_public_route.language_name
                        WHERE receive_information IS NOT NULL 
                        ORDER BY pss_vehicle_public_master.id desc 
                        LIMIT 1 ) AS data order by data.destination_time asc
                ";
            apiDB db = new apiDB();
            List<Param> p = new List<Param>();
            //p.Add(new Param("date_in", DateTime.Now.ToString(), Param.type.Varchar));
            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        public ActionResult timeout([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();

            string cmd = @" SELECT * FROM (SELECT pss_taxi_queue_itd.id,pss_taxi_queue_itd.timeout_message,pss_taxi_queue_itd.timeout,psl1.thai_language,psl1.eng_language,psl1.chinese_language,pss_taxi_queue_itd.image_base64
                            FROM pss_taxi_queue_itd 
                            INNER JOIN pss_setting_language AS psl1 ON psl1.id = pss_taxi_queue_itd.timeout_message) AS subquery_alias
                        ORDER BY id DESC 
                        LIMIT 1

                ";
            apiDB db = new apiDB();
            List<Param> p = new List<Param>();
            //p.Add(new Param("date_in", DateTime.Now.ToString(), Param.type.Varchar));
            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        public ActionResult timeout1([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();

            string cmd = @" SELECT * FROM (SELECT pss_vehicle_public.id,pss_vehicle_public.name_moved0,pss_vehicle_public.timeout_message,pss_vehicle_public.timeout,psl1.thai_language,psl1.eng_language,psl1.chinese_language,pss_vehicle_public.image_base64
                            FROM pss_vehicle_public 
                            INNER JOIN pss_setting_language AS psl1 ON psl1.id = pss_vehicle_public.timeout_message) AS subquery_alias ORDER BY id ASC

                ";
            apiDB db = new apiDB();
            List<Param> p = new List<Param>();
            //p.Add(new Param("date_in", DateTime.Now.ToString(), Param.type.Varchar));
            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }
        public ActionResult timeout2([FromBody] search body)
        {
            bool _return = false;
            DataTable dt2 = new DataTable();
            apiDB sql = new apiDB();

            string cmd = @" SELECT * FROM (SELECT pss_parking_space_setting.id,pss_parking_space_setting.name_moved0,pss_parking_space_setting.timeout_message,pss_parking_space_setting.timeout,psl1.thai_language,psl1.eng_language,psl1.chinese_language,pss_parking_space_setting.image_base64
                            FROM pss_parking_space_setting 
                            INNER JOIN pss_setting_language AS psl1 ON psl1.id = pss_parking_space_setting.timeout_message) AS subquery_alias ORDER BY id ASC

                ";
            apiDB db = new apiDB();
            List<Param> p = new List<Param>();
            //p.Add(new Param("date_in", DateTime.Now.ToString(), Param.type.Varchar));
            try
            {
                dt2 = sql.Query(cmd);
            }
            catch (Exception)
            {
                db = null;
            }
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            foreach (DataRow dr in dt2.Rows)
            {
                Dictionary<string, object> row = new Dictionary<string, object>();
                foreach (DataColumn col in dt2.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }

            var jsonString = JsonConvert.SerializeObject(rows);
            //return Json(jsonString);
            return Ok(jsonString);

        }

    }
}
