using TimeCapsuleX.Common.Infrastructure.Events;

namespace TimeCapsuleX.Common.Infrastructure.IntegrationTests.EventBus;

internal sealed class TestEventConsumer : IIntegrationEventHandler<FakeEvent>
{
    public Task Handle(FakeEvent @event, CancellationToken cancellationToken)
    {
        @event.MarkAsConsumed();
        return Task.CompletedTask;
    }
}
