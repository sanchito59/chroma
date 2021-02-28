using System;

namespace API.Services
{
  public class PaletteService
  {
    private readonly Random _random = new Random();

    public string GenerateColor()
    {
      return "rgb(" + Generate255Int() + ", " + Generate255Int() + ", " + Generate255Int() + ");";
    }
    public string Generate255Int()
    {
      return (_random.Next(0, 255)).ToString();
    }
  }
}
