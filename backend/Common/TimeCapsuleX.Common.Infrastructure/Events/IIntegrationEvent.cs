using MediatR;

namespace TimeCapsuleX.Common.Infrastructure.Events;

public interface IIntegrationEvent : INotification
{
    Guid Id { get; }
    DateTimeOffset OccurredDateTime { get; }
}
