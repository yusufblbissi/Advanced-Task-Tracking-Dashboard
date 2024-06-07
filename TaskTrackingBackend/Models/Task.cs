public class Task
{
    public Task()
    {
        Name = "";
        Description = "";
        Project = null; 
        Priority = " ";
        DueDate = "";
        Completed=false; 
    }

    public int Id { get; set; }
    public Boolean Completed { get; set; }
    public string DueDate { get; set; }
    public string Priority { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string? Project { get; set; } // Make the property nullable
}