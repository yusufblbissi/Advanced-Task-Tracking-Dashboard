using System;
using System.Collections.Generic;

namespace TaskTrackingBackend.Models
{
    public class Project
    {
        public Project()
        {
            Name = "";
            Owner = "";
            Tasks = new List<Task>();
            StartDate = "";
            Deadline="";
        } 
        public string StartDate{get;set;}
        public string Deadline{get;set;}
        public int Id { get; set; }
        public string Name { get; set; }
        public string Owner { get; set; }
        public List<Task> Tasks { get; set; }
    }
}