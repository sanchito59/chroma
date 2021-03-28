using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
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
    public async Task<ActionResult<IEnumerable<PaletteDto>>> GetPalettes([FromQuery] UserParams userParams)
    {
      var palettes = await _unitOfWork.PaletteRepository.GetPalettesAsync(userParams);

      Response.AddPaginationHeader(palettes.CurrentPage, palettes.PageSize, palettes.TotalCount, palettes.TotalPages);

      return Ok(palettes);
    }

    // GET user - api/palettes/:id
    [HttpGet("{id}", Name = "GetPalette")]
    public async Task<ActionResult<Palette>> GetPalette(int id)
    {
      return await _unitOfWork.PaletteRepository.GetPaletteAsync(id);
    }

    // GET a random palette for frontend UI - api/palettes/random-palette
    [HttpGet("random-palette")]
    public Palette GenerateRandomPalette()
    {
      return _unitOfWork.PaletteRepository.GenerateRandomPalette();
    }
  }
}
