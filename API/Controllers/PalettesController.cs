using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class PalettesController : BaseApiController
  {
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public PalettesController(IUnitOfWork unitOfWork, IMapper mapper)
    {
      _mapper = mapper;
      _unitOfWork = unitOfWork;

    }

    // GET all palettes - api/palettes
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PaletteDto>>> GetPalettes()
    {
      var palettes = await _unitOfWork.PaletteRepository.GetPalettesAsync();

      return Ok(palettes);
    }

    // GET user - api/palettes/:id
    [HttpGet("{id}", Name = "GetPalette")]
    public async Task<ActionResult<Palette>> GetPalette(int id)
    {
      return await _unitOfWork.PaletteRepository.GetPaletteAsync(id);
    }
  }
}