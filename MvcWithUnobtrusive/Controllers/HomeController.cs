using MvcWithUnobtrusive.ViewModels;
using System.Web.Mvc;

namespace MvcWithUnobtrusive.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var viewModel = new CreatePerson();

            return View(viewModel);
        }
    }
}