namespace Musico.DataContext.Entities
{
    using System.Collections.Generic;

    public class Track
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public Album Album { get; set; }

        public List<Artist> Artists { get; set; } = new List<Artist>();
    }
}
