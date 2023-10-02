using Microsoft.EntityFrameworkCore;

namespace Feedback.Models
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) 
        {
        }

        public DbSet<user> user { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=LAPTOP-P20IR6K6;database=feedbackDb;trusted_connection=true; TrustServerCertificate=true;");
        }
    }

    
}
