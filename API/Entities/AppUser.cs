using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
  public class AppUser : IdentityUser<int>
  {
    public string KnownAs { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime LastActive { get; set; } = DateTime.Now;
    public string City { get; set; }
    public string Country { get; set; }
    public string FavoriteColor { get; set; }
    public ICollection<Palette> Palettes { get; set; }
    public ICollection<AppUserRole> UserRoles { get; set; }
  }
}
