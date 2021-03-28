using System.Threading.Tasks;
using API.Entities;
using API.Helpers;
using API.DTOs;

namespace API.Interfaces
{
  public interface IPaletteRepository
  {
    Task<PagedList<PaletteDto>> GetPalettesAsync(UserParams userParams);
    Task<Palette> GetPaletteAsync(int id);
    public Palette GenerateRandomPalette();
  }
}
