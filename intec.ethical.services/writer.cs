using System;
using System.IO;
using System.Web.Hosting;

namespace intec.ethical.services
{
    public class writer
    {
        String root = HostingEnvironment.ApplicationPhysicalPath + "/Results.txt";


        public void write(string u, string p)
        {
            try
            {
                using (TextWriter tw = new StreamWriter(root))
                {
                    tw.WriteLine("{0} | {1} ", u, p);
                }
            }
            catch (Exception ex) {
                throw ex;
            }
        }
    }
}
