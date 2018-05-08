using System.ComponentModel.DataAnnotations;

namespace MvcWithUnobtrusive.ViewModels
{
    public class CreatePerson
    {
        [Required, MaxLength(50)]
        public string Name { get; set; }

        public string Title { get; set; }

        public int? Age { get; set; }
    }
}