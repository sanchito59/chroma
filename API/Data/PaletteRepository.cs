using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using API.Services;
using AutoMapper;
using AutoMapper.QueryableExtensions;
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

    public async Task<PagedList<PaletteDto>> GetPalettesAsync(UserParams userParams)
    {
      var paletteQuery = _context.Palettes.AsQueryable();
      paletteQuery = paletteQuery.OrderByDescending(p => p.Created);

      return await PagedList<PaletteDto>.CreateAsync(paletteQuery.ProjectTo<PaletteDto>(_mapper.ConfigurationProvider).AsNoTracking(), userParams.PageNumber, userParams.
      PageSize);
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
