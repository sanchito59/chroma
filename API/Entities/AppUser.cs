using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
  public class AppUser : IdentityUser<int>
  {
    [Required()]
    public string KnownAs { get; set; }

    [Required()]
    public DateTime Created { get; set; } = DateTime.Now;

    [Required()]
    public DateTime LastActive { get; set; } = DateTime.Now;

    [Required()]
    public string City { get; set; }

    [Required()]
    public string Country { get; set; }

    [Required()]
    public string FavoriteColor { get; set; }

    [Required()]
    public ICollection<AppUserRole> UserRoles { get; set; }
    public ICollection<Palette> Palettes { get; set; }
  }
}
