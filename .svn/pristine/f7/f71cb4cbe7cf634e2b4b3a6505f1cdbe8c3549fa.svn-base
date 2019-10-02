using System;
using System.IO;

namespace intec.ethical.services
{
    public class writer
    {
        String root = (@"C://Users/Administrador/Desktop/results.txt");

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
