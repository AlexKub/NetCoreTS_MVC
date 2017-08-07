using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace NetCoreTS_MVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public JsonResult GetUsers()
        {
            List<User> users = new List<User>()
            {
                new User {Id=1, Name="Tom", Age=23},
                new User {Id=2, Name="Alice", Age=28},
                new User {Id=3, Name="Bill", Age=32}
            };

            return Json(users);
        }
    }
}
