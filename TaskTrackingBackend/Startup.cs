using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TaskTrackingBackend.Data;
using TaskTrackingBackend.Models;
using System.Text.Json;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        var connectionString = Configuration.GetConnectionString("DefaultConnection") ?? "Your default connection string";

        services.AddDbContext<TaskTrackingContext>(options =>
            options.UseMySQL(connectionString));

        services.AddControllers();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseHttpsRedirection();

        app.UseRouting();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
        app.UseEndpoints(endpoints =>
{
    endpoints.MapGet("/projects", async context =>
 {
     Project[] projects = new Project[]
     {
        new Project { Id = 1, Name = "Project A", Owner = "Owner A", StartDate = DateTime.Now.ToString("yyyy-MM-dd"), Deadline = DateTime.Now.AddDays(30).ToString("yyyy-MM-dd") },
        new Project { Id = 2, Name = "Project B", Owner = "Owner B", StartDate = DateTime.Now.ToString("yyyy-MM-dd"), Deadline = DateTime.Now.AddDays(45).ToString("yyyy-MM-dd") },
     };

     var json = JsonSerializer.Serialize(projects);
     context.Response.ContentType = "application/json";
     await context.Response.WriteAsync(json);
 });
    endpoints.MapGet("/project/{id}", async context =>
 {
     var projectId = context.Request.RouteValues["id"].ToString();

     Project[] projects = new Project[]
     {
        new Project { Id = 1, Name = "Project A", Owner = "Owner A", StartDate = DateTime.Now.ToString("yyyy-MM-dd"), Deadline = DateTime.Now.AddDays(30).ToString("yyyy-MM-dd") },
        new Project { Id = 2, Name = "Project B", Owner = "Owner B", StartDate = DateTime.Now.ToString("yyyy-MM-dd"), Deadline = DateTime.Now.AddDays(45).ToString("yyyy-MM-dd") },
     };

     Project project = null;

     foreach (var proj in projects)
     {
         if (proj.Id.ToString() == projectId)
         {
             project = proj;
             break;
         }
     }

     if (project != null)
     {
         var json = JsonSerializer.Serialize(project);

         context.Response.ContentType = "application/json";

         await context.Response.WriteAsync(json);
     }
     else
     {
         context.Response.StatusCode = 404;
         await context.Response.WriteAsync("Project not found");
     }
 });

    endpoints.MapGet("/project/{projectId}/tasks", async context =>
    {
        var projectId = context.Request.RouteValues["projectId"].ToString();

        Task[] tasks = null;

        // Dummy data for tasks
        if (projectId == "1")
        {
            tasks = new Task[]
            {
            new Task { Id = 1, Name = "Task 1", Description = "Description 1", Priority = "High", DueDate = DateTime.Now.AddDays(10).ToString("yyyy-MM-dd"), Completed = false },
            new Task { Id = 2, Name = "Task 2", Description = "Description 2", Priority = "Medium", DueDate = DateTime.Now.AddDays(20).ToString("yyyy-MM-dd"), Completed = true }
            };
        }
        else if (projectId == "2")
        {
            tasks = new Task[]
            {
            new Task { Id = 3, Name = "Task 3", Description = "Description 3", Priority = "Low", DueDate = DateTime.Now.AddDays(30).ToString("yyyy-MM-dd"), Completed = false },
            new Task { Id = 4, Name = "Task 4", Description = "Description 4", Priority = "High", DueDate = DateTime.Now.AddDays(40).ToString("yyyy-MM-dd"), Completed = false }
            };
        }
        // Add more conditions as needed for other project IDs

        if (tasks != null)
        {
            var json = JsonSerializer.Serialize(tasks);

            context.Response.ContentType = "application/json";

            await context.Response.WriteAsync(json);
        }
        else
        {
            context.Response.StatusCode = 404;
            await context.Response.WriteAsync("Tasks not found for the given project ID");
        }
    });

});
    }

}


