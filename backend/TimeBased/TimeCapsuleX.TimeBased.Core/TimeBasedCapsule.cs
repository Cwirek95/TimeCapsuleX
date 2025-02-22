namespace TimeCapsuleX.TimeBased.Core;

public sealed class TimeBasedCapsule
{
    public Guid Id { get; init; }

    public Guid UserId { get; init; }
    
    public DateTimeOffset OpeningDate { get; init; }
    
    public string Title { get; init; }
    
    public string Message { get; init; }
    
    public DateTimeOffset CreatedAt { get; init; }
    public DateTimeOffset? OpenedAt { get; private set; }
    
    public bool IsOpened => OpenedAt.HasValue;
    
    
    private TimeBasedCapsule(Guid id, Guid userId, DateTimeOffset openingDate, string title, string message)
    {
        Id = id;
        UserId = userId;
        OpeningDate = openingDate;
        Title = title;
        Message = message;
    }
}
