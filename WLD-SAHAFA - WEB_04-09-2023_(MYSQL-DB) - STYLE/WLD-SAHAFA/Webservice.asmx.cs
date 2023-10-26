using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Services;
using WLD_SAHAFA.Constants;
using WLD_SAHAFA.DatabaseContext;
using WLD_SAHAFA.Helper;
using WLD_SAHAFA.Models;

namespace WLD_SAHAFA
{
    /// Summary description for TempratureConverter  
    /// </summary>  
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line.   
    [System.Web.Script.Services.ScriptService]
    public class Webservice : System.Web.Services.WebService
    {
        [WebMethod]
        public object GetDetails(IList<Counter> oldCounters)
        {
            var counters = GetData();
            var speechText = WebserviceHelper.BuildSpeechText(oldCounters, counters);
            return new
            {
                textEnglish = speechText.Item1,
                textArabic = speechText.Item2,
                data = counters,
                latestCounter = WebserviceHelper.GetNewCounterDetails(oldCounters, counters).FirstOrDefault()
            };
        }
        private IList<Counter> GetData()
        {
            using (var _context = new DatabaseContextMySql())
                return _context.GetDataTable<Counter>(QueryConstants.GetCounterDetails);
        }
    }
}
