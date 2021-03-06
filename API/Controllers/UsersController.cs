using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [Authorize] // TODO: Assess if this should be protected
  public class UsersController : BaseApiController
  {
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public UsersController(IUnitOfWork unitOfWork, IMapper mapper)
    {
      _mapper = mapper;
      _unitOfWork = unitOfWork;
    }

    // GET all users - api/users
    [HttpGet]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
      var users = await _unitOfWork.UserRepository.GetUsersAsync();

      return Ok(users);
    }

    // GET user - api/users/:id
    [HttpGet("{username}", Name = "GetUser")]
    public async Task<ActionResult<MemberDto>> GetUser(string username)
    {
      return await _unitOfWork.UserRepository.GetMemberAsync(username);
    }

    // PUT user - api/users
    [HttpPut]
    public async Task<ActionResult<MemberDto>> UpdateUser(MemberUpdateDto memberUpdateDto)
    {
      var user = await _unitOfWork.UserRepository.GetUserByUsernameAsync(User.GetUsername());

      _mapper.Map(memberUpdateDto, user);
      _unitOfWork.UserRepository.Update(user);

      if (await _unitOfWork.Complete()) return NoContent();

      return BadRequest("Failed to update user");
    }

    [HttpPost("add-palette")]
    public async Task<ActionResult<PaletteDto>> AddPalette(CreatePaletteDto createPaletteDto)
    {
      var user = await _unitOfWork.UserRepository.GetUserByUsernameAsync(User.GetUsername());

      var paletteGenerator = new PaletteService();

      var palette = new Palette
      {
        Title = createPaletteDto.Title,
        Color1 = createPaletteDto.Color1,
        Color2 = createPaletteDto.Color2,
        Color3 = createPaletteDto.Color3,
        Color4 = createPaletteDto.Color4,
        Color5 = createPaletteDto.Color5,
      };

      user.Palettes.Add(palette);

      if (await _unitOfWork.Complete())
      {
        // return CreatedAtRoute("/", new { username = user.UserName }, _mapper.Map<PaletteDto>(palette)); // TODO: Need Angular client for this
        return _mapper.Map<PaletteDto>(palette);
      }

      return BadRequest("Problem saving palette");
    }

    // DELETE - api/delete-palette/:id
    [HttpDelete("delete-palette/{paletteId}")]
    public async Task<ActionResult> DeletePalette(int paletteId)
    {
      var user = await _unitOfWork.UserRepository.GetUserByUsernameAsync(User.GetUsername());

      var palette = user.Palettes.FirstOrDefault(x => x.Id == paletteId);

      if (palette == null) return NotFound();

      user.Palettes.Remove(palette);

      if (await _unitOfWork.Complete()) return Ok();

      return BadRequest("Failed to delete the palette");
    }
  }
}
