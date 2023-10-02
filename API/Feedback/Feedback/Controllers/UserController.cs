using Feedback.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Feedback.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;

        public UserController(UserDbContext userDbContext)
        {
            _userDbContext = userDbContext;
        }

        [HttpGet]
        [Route("GetUser")]
        public async Task<IEnumerable<user>> GetUsers()
        {
            return await _userDbContext.user.ToListAsync();
        }

        [HttpPost]
        [Route("AddUser")]
        public async Task<user> AddUser(user objUser)
        {
            _userDbContext.user.Add(objUser);
            await _userDbContext.SaveChangesAsync();
            return objUser;
        }

        [HttpPatch]
        [Route("UpdateUser/{id}")]
        public async Task<user> UpdateUser(user objUser)
        {
            _userDbContext.Entry(objUser).State = EntityState.Modified;
            await _userDbContext.SaveChangesAsync();
            return objUser;
        }

        [HttpDelete]
        [Route("DeleteUser/{id}")]
        public bool DeleteUser(int id)
        {
            bool a = false;
            var user = _userDbContext.user.Find(id);
            if (user != null)
            {
                a = true;
                _userDbContext.Entry(user).State = EntityState.Deleted;
                _userDbContext.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;

        }

    }


    //[Route("api/feedback")]
    //public class UserController : Controller
    //{
    //    private readonly UserDbContext _context;

    //    public UserController(UserDbContext context)
    //    {
    //        _context = context;
    //    }

    //    [HttpPost]
    //    public IActionResult SubmitFeedback([FromBody] user feedback)
    //    {
    //        if (feedback == null)
    //        {
    //            return BadRequest();
    //        }

    //        _context.user.Add(feedback);
    //        _context.SaveChanges();

    //        return Ok();
    //    }
    //}

}