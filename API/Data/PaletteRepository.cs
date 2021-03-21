using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using API.Services;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
  public class PaletteRepository : IPaletteRepository
  {
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    public PaletteRepository(DataContext context, IMapper mapper)
    {
      _mapper = mapper;
      _context = context;
    }

    public async Task<Palette> GetPaletteAsync(int id)
    {
      return await _context.Palettes.FindAsync(id);
    }

    public async Task<IEnumerable<Palette>> GetPalettesAsync()
    {
      return await _context.Palettes.ToListAsync();
    }

    public Palette GenerateRandomPalette()
    {
      PaletteService paletteService = new PaletteService();
      var palette = new Palette();

      palette.Color1 = paletteService.GenerateColor();
      palette.Color2 = paletteService.GenerateColor();
      palette.Color3 = paletteService.GenerateColor();
      palette.Color4 = paletteService.GenerateColor();
      palette.Color5 = paletteService.GenerateColor();

      return palette;
    }
  }
}
