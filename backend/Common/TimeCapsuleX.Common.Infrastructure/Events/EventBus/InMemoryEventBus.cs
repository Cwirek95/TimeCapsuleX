using MediatR;

namespace TimeCapsuleX.Common.Infrastructure.Events.EventBus;

internal sealed class InMemoryEventBus(IPublisher mediator) : IEventBus
{
    public async Task PublishAsync<TEvent>(TEvent @event, CancellationToken cancellationToken = default) where TEvent : IIntegrationEvent =>
        await mediator.Publish(@event, cancellationToken);
}
