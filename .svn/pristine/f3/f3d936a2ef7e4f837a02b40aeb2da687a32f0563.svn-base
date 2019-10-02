using intec.ethical.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace intec_ethical.Controllers
{
    public class UsuarioController : ApiController
    {
        [HttpGet]
        public IHttpActionResult AddUser(string username, string password)
        {
            var _writer = new writer();

            try
            {
                _writer.write(username, password);
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}