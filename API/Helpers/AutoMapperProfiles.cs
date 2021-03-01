using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
  public class AutoMapperProfiles : Profile
  {
    public AutoMapperProfiles()
    {
      CreateMap<AppUser, MemberDto>();
      CreateMap<Palette, PaletteDto>();
      CreateMap<RegisterDto, AppUser>();
      CreateMap<MemberUpdateDto, AppUser>();
    }
  }
}
