using System;
using System.Collections.Generic;

namespace API.DTOs
{
  public class MemberDto
  {
    public int Id { get; set; }
    public string Username { get; set; }
    // public string PhotoUrl { get; set; }
    public string KnownAs { get; set; }
    public DateTime Created { get; set; }
    public DateTime LastActive { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string FavoriteColor { get; set; }

    public ICollection<PaletteDto> Palettes { get; set; }
  }
}
