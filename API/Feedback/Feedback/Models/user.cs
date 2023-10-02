using System.ComponentModel.DataAnnotations;

namespace Feedback.Models
{
    public class user
    {
        [Key]
        public int Id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string feedback { get; set; }
    }
}
