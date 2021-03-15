using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
  public interface IPaletteRepository
  {
    Task<IEnumerable<Palette>> GetPalettesAsync();
    Task<Palette> GetPaletteAsync(int id);
  }
}
