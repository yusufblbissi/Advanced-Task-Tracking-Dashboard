using Microsoft.EntityFrameworkCore;
using TaskTrackingBackend.Models;

namespace TaskTrackingBackend.Data
{
    public class TaskTrackingContext : DbContext
    {
        public TaskTrackingContext(DbContextOptions<TaskTrackingContext> options) : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}
