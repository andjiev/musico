namespace Musico.DataContext.Entities
{
    using System.Collections.Generic;

    public class Album
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public List<string> Genres { get; set; } = new List<string>();

        public List<Image> Images { get; set; } = new List<Image>();

        public List<Artist> Artists { get; set; } = new List<Artist>();
    }
}
