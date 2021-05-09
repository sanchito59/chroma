using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
  [Table("Palettes")]
  public class Palette
  {
    public int Id { get; set; }

    [Required()]
    public string Title { get; set; }

    [Required()]
    public string Color1 { get; set; }

    [Required()]
    public string Color2 { get; set; }

    [Required()]
    public string Color3 { get; set; }

    [Required()]
    public string Color4 { get; set; }

    [Required()]
    public string Color5 { get; set; }

    [Required()]
    public AppUser AppUser { get; set; }

    [Required()]
    public int AppUserId { get; set; }

    [Required()]
    public DateTime Created { get; set; } = DateTime.Now;
  }
}
