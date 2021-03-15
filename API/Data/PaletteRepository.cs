using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
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

    public async Task<IEnumerable<Palette>> GetPalettesAsync()
    {
      return await _context.Palettes.ToListAsync();
    }
  }
}
