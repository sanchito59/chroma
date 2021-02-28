using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
  [Table("Palettes")]
  public class Palette
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Color1 { get; set; }
    public string Color2 { get; set; }
    public string Color3 { get; set; }
    public string Color4 { get; set; }
    public string Color5 { get; set; }
    public AppUser AppUser { get; set; }
    public int AppUserId { get; set; }
  }
}
