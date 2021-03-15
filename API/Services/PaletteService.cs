using System;
using API.Interfaces;

namespace API.Services
{
  public class PaletteService : IPaletteService
  {
    private readonly Random _random = new Random();

    public string GenerateColor()
    {
      return "rgb(" + Generate255Int() + ", " + Generate255Int() + ", " + Generate255Int() + ")"; // TODO: Proper string interpolation
    }
    public string Generate255Int()
    {
      return (_random.Next(0, 256)).ToString();
    }
  }
}
